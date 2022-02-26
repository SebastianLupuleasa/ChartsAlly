package com.lupuleasa.ClassAlly.toReact;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InfoReactService {

    @Autowired
    public InfoReactService() {
    }

    String getInfo()
    {
        return "this is from the backend, nice";
    }
}
