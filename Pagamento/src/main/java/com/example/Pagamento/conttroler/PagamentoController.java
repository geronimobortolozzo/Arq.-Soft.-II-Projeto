package com.example.Pagamento.conttroler;


import com.example.Pagamento.PagamentoRequest;
import com.example.Pagamento.model.Pagamento;
import com.example.Pagamento.service.PagamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pagamento")
public class PagamentoController {

    @PostMapping
    public ResponseEntity<String> processarPagamento(@RequestBody PagamentoRequest pagamento) {
        // Simulação: 90% chance de sucesso
        boolean aprovado = Math.random() < 0.9;

        if (aprovado) {
            return ResponseEntity.ok("CONFIRMADO");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("FALHOU");
        }
    }
}
