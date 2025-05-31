package com.example.Pedido.controller;


import com.example.Pedido.PagamentoRequest;
import com.example.Pedido.model.Pedido;
import com.example.Pedido.repository.PedidoRepository;
import com.example.Pedido.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    @Autowired
    private PedidoService service;

    @Autowired
    private PedidoRepository pedidoRepository;

    private final RestTemplate restTemplate = new RestTemplate();

    @PostMapping
    public ResponseEntity<Pedido> criarPedido(@RequestBody Pedido pedido) {
        pedido.setStatus("PROCESSANDO");
        Pedido salvo = pedidoRepository.save(pedido);

        try {
            String pagamentoUrl = "http://localhost:8084/pagamento";

            PagamentoRequest pagamento = new PagamentoRequest();
            pagamento.setPedidoId(salvo.getId());
            pagamento.setValor(salvo.getValorTotal());

            ResponseEntity<String> resposta = restTemplate.postForEntity(pagamentoUrl, pagamento, String.class);

            if ("CONFIRMADO".equals(resposta.getBody())) {
                salvo.setStatus("CONFIRMADO");
            } else {
                salvo.setStatus("FALHOU");
            }

        } catch (Exception e) {
            salvo.setStatus("ERRO_NO_PAGAMENTO");
        }

        pedidoRepository.save(salvo);
        return ResponseEntity.ok(salvo);
    }

    @GetMapping("/usuario/{id}")
    public List<Pedido> listarPorUsuario(@PathVariable Long id) {
        return service.buscarPorUsuario(id);
    }
}