import React from 'react'
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormMeasures from 'src/views/form-layouts/FormMeasures'

import FormUserSettings from 'src/views/form-layouts/FormUserSettings'


// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'


interface State {
  peso: number
  altura: number
  cintura: number
  pescoço: number
  sexo: string
  idade: number

}


const FormLayouts = () => {
  const [sex, setSex] = React.useState('male')
  const [age, setAge] = React.useState(0)
  const [calculated, setCalculated] = useState(false)
  const [percent, setPercent] = useState('')
  const [values, setValues] = useState<State>({
    peso: 0,
    altura: 0,
    cintura: 0,
    pescoço: 0,
    sexo: '',
    idade: 0
  })

  const handleSend = () => {
    const percentualGordura = (495 / (1.0324 - 0.19077 * Math.log10(values.cintura - values.pescoço) + 0.15456 * Math.log10(values.altura)) - 450).toFixed(2)
    console.log(percentualGordura)
    setCalculated(true)
    setPercent(percentualGordura)

    // 495 / ( 1.0324 - 0.19077 * log10( waist - neck ) + 0.15456 * log10( height ) ) - 450

  }

  const handleSave = async (bfIndex: string) => {
    await fetch('http://localhost:3000/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": "Teste",
        "email": "teste@teste.com.br",
        "birthYear": 1990,
        "bodyFatIndex": Number(bfIndex)
      })
    }).then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
  }


  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <FormUserSettings sex={sex} setSex={setSex} age={age} setAge={setAge} />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormMeasures values={values} setValues={setValues} handleSend={handleSend} />
        </Grid>
        {calculated && <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title='Resultado' titleTypographyProps={{ variant: 'h6' }} />
            <CardContent>
              <Typography>
                {`Percentual de gordura: ${percent}`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => handleSave(percent)} variant='contained'>Salvar</Button>
            </CardActions>
          </Card>
        </Grid>}
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
