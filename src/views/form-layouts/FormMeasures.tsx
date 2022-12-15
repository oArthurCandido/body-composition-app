// ** React Imports
import { ChangeEvent, MouseEvent, useState, SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

interface State {
  peso: number
  altura: number
  cintura: number
  pescoço: number
  sexo: string
  idade: number

}

const FormLayoutsBasic = () => {
  // ** States
  const [values, setValues] = useState<State>({
    peso: 0,
    altura: 0,
    cintura: 0,
    pescoço: 0,
    sexo: '',
    idade: 0
  })

  console.log(values.cintura)






  return (
    <Card>
      <CardHeader title='Medidas' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField fullWidth type={'number'} label='Altura em centímetros' placeholder='175' />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='number'
                label='Peso em quilogramas'
                placeholder='60'
                helperText='Arredonde para o número inteiro mais próximo'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='number'
                label='Cintura em centímetros'
                placeholder='75'
                helperText='Medir na altura do umbigo'

                onChange={e => {
                  const value = e.target.value
                  setValues({ ...values, cintura: Number(value) })

                }
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='number'
                label='Pescoço em centímetros'
                placeholder='35'
                helperText='Medir na altura do meio do pescoço'
              />
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Button type='submit' variant='contained' size='large'>
                  Calcular!
                </Button>

              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsBasic
