package com.example.Pedido.service;


import com.example.Pedido.model.Pedido;
import com.example.Pedido.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoService {
    @Autowired
    private PedidoRepository repository;

    public Pedido criar(Pedido pedido) {
        return repository.save(pedido);
    }

    public List<Pedido> buscarPorUsuario(Long usuarioId) {
        return repository.findByUsuarioId(usuarioId);
    }
}
