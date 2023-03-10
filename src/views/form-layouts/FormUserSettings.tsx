// ** MUI Imports
import Card from '@mui/material/Card'

import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';


import HumanMale from 'mdi-material-ui/HumanMale'
import HumanFemale from 'mdi-material-ui/HumanFemale'
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';


interface FormLayoutsProps {
  sex: string;
  setSex: (

    newSexOption: string,
  ) => void;
  age: number;
  setAge: (e: any) => void;
}

const FormLayoutsIcons = ({ sex, age, setSex, setAge }: FormLayoutsProps) => {


  const handleSexChange = (
    event: React.MouseEvent<HTMLElement>,
    newSexOption: string,
  ) => {
    setSex(newSexOption);
    console.log(sex)
  };

  const handleAge = (e: any) => {
    setAge(e.target.value)
    console.log(age)
  }




  return (
    <Card>
      <CardHeader title='Escolha uma opção' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
          <ToggleButtonGroup
            aria-label="sex-select"
            onChange={handleSexChange}
            value={sex}
            exclusive
          >
            <ToggleButton value="male" aria-label="male">
              <HumanMale sx={{ fontSize: '3em' }} />
              <Typography>
                Masculino
              </Typography>
            </ToggleButton>
            <ToggleButton value="female" aria-label="female">
              <HumanFemale sx={{ fontSize: '3em' }} />
              <Typography>
                Feminino
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </FormControl>
        <TextField value={age} onChange={e => handleAge(e)} fullWidth type={'number'} label='Idade' />
      </CardContent>

    </Card>
  )
}

export default FormLayoutsIcons




