package com.magicworld.tfg_angular_springboot.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class InvalidTokenException extends ApiException {
    public InvalidTokenException() {
        super("error.invalid.token");
    }
}
