package com.example.Pagamento.repository;

import com.example.Pagamento.model.Pagamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PagamentoRepository extends JpaRepository<Pagamento,Long> {
}
