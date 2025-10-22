package com.magicworld.tfg_angular_springboot.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class NoDiscountsCanBeAssignedToTicketTypeException extends ApiException {
    public NoDiscountsCanBeAssignedToTicketTypeException() {
        super("error.ticket_type.discounts.assigned");
    }
}
