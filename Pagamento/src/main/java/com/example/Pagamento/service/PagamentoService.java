package com.example.Pagamento.service;

import com.example.Pagamento.model.Pagamento;
import com.example.Pagamento.repository.PagamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PagamentoService {
    @Autowired
    private PagamentoRepository repository;

    public Pagamento processar(Long pedidoId) {
        Pagamento pagamento = new Pagamento();
        pagamento.setPedidoId(pedidoId);
        pagamento.setStatus(Math.random() > 0.2 ? "CONFIRMADO" : "FALHOU");
        return repository.save(pagamento);
    }
}
