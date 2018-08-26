package com.example.Server.mapper;

import org.modelmapper.ModelMapper;

import java.lang.reflect.Type;

/**
 * Created by Michiel
 */
public class BaseMapper {
    public static <T> T map(Object from, Type type) {
        ModelMapper moddelMapper = new ModelMapper();
        return moddelMapper.map(from, type);
    }
}
