package com.lupuleasa.ClassAlly.toReact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/react/")
@CrossOrigin("*")
public class InfoReactController {


    private final InfoReactService infoReactService;

    @Autowired
    public InfoReactController(InfoReactService infoReactService) {
        this.infoReactService = infoReactService;
    }

    @GetMapping
    public String sendInfo()
    {
        return this.infoReactService.getInfo();
    }

}
