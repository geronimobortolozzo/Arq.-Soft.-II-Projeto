package com.example.Pedido;

public class PagamentoRequest {
    private Long pedidoId;
    private Double valor;

    // Getters e Setters
    public Long getPedidoId() {
        return pedidoId;
    }

    public void setPedidoId(Long pedidoId) {
        this.pedidoId = pedidoId;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }
}