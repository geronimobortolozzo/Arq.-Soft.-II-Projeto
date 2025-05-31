package com.example.Pedido.model;


import jakarta.persistence.*;

import java.util.List;

@Entity
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long usuarioId;
    private String data;
    private Double valorTotal;
    private String status;

    @ElementCollection
    private List<Long> produtosIds;

    // Getters
    public Long getId() {
        return id;
    }

    public Long getUsuarioId() {
        return usuarioId;
    }

    public String getData() {
        return data;
    }

    public Double getValorTotal() {
        return valorTotal;
    }

    public List<Long> getProdutosIds() {
        return produtosIds;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public void setData(String data) {
        this.data = data;
    }

    public void setValorTotal(Double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public void setProdutosIds(List<Long> produtosIds) {
        this.produtosIds = produtosIds;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
