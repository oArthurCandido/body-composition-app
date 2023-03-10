// ** React Imports


// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'

import CardContent from '@mui/material/CardContent'

interface FormMeasureProps {
  values: {
    peso: number
    altura: number
    cintura: number
    pescoço: number
    sexo: string
    idade: number
  }
  setValues: (
    dispatch: any,
  ) => void,
  handleSend: () => void
}

const FormLayoutsBasic = ({ values, setValues, handleSend }: FormMeasureProps) => {


  return (
    <Card>
      <CardHeader title='Medidas' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField fullWidth type={'number'} label='Altura em centímetros' placeholder='175'
                onChange={e => {
                  const value = e.target.value
                  setValues({ ...values, altura: Number(value) })

                }
                } />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='number'
                label='Peso em quilogramas'
                placeholder='60'
                helperText='Arredonde para o número inteiro mais próximo'
                onChange={e => {
                  const value = e.target.value
                  setValues({ ...values, peso: Number(value) })
                }
                }
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
                onChange={e => {
                  const value = e.target.value
                  setValues({ ...values, pescoço: Number(value) })
                }
                }
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
                <Button onClick={handleSend} type='submit' variant='contained' size='large'>
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
