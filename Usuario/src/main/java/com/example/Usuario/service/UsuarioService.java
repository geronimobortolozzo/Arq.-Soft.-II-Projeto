package com.example.Usuario.service;

import com.example.Usuario.model.Usuario;
import com.example.Usuario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository repository;

    public Usuario cadastrar(Usuario usuario) {
        return repository.save(usuario);
    }

    public Optional<Usuario> login(String email, String senha) {
        return repository.findByEmail(email)
                .filter(u -> u.getSenha().equals(senha));
    }
}
