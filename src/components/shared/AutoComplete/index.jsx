// components/shared/Autocomplete/Autocomplete.js
'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { games } from '@/constants';

export default function AutocompleteJogo({ onInputChange }) {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={games}
      autoHighlight
      getOptionLabel={(option) => option.name}
      onChange={onInputChange}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="170"
            src={option.image}
            alt=""
          />
          {option.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          sx={{ backgroundColor: 'white' }}
          {...params}
          size="small"
          label="Pesquisar jogo..."
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}
