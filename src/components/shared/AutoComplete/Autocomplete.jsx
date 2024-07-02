"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { games } from '@/constants';
import { Router } from 'next/router';

export default function AutocompleteJogo() {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={games}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            onClick={() => {
              Router.push(`/jogo/${option.id}`);
            }}
            key={key}
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
            <img
              loading="lazy"
              width="170"
              src={option.image}
              alt=""
            />
            {option.name}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          size='small'
          label="Pesquisar jogo..."
          onClick={(e) => {

          }}
          
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
