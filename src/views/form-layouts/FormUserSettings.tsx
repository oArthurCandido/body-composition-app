// ** MUI Imports
import Card from '@mui/material/Card'

import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

const FormLayoutsIcons = () => {
  return (
    <Card>
      <CardHeader title='Escolha uma opção' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={e => console.log(e.target.value)}
          >
            <FormControlLabel value="female" control={<Radio />} label="Feminino" />
            <FormControlLabel value="male" control={<Radio />} label="Masculino" />
          </RadioGroup>


        </FormControl>
        <TextField fullWidth type={'number'} label='Idade' />
      </CardContent>
    </Card>
  )
}

export default FormLayoutsIcons




