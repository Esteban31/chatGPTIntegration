import { Body, Controller, Post, Res } from '@nestjs/common';
import { DiagnosticReturn } from './dto/diagnostic-return';

import { Configuration, OpenAIApi } from 'openai';

@Controller('diagnostics')
export class DiagnosticsController {
  @Post()
  async getDiagnostics(@Body() prompt: string): Promise<any> {
    // Asssign default config message
    const request =
      'Según la conversación anterior, retorname un JSON de un resumen MUY completo en terminos médicos entendibles,  separado por las siguientes categorías, tal cual están escritas, Enfermedad actual, motivo de consulta, examen fisico, impresion, plan de mejora ';

    const configuration = new Configuration({
      organization: '',
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt + request,
      max_tokens: 500,
      temperature: 0.9,
    });

    // const text = response?.data.choices[0].text;

    // const lines = text.split('\n');

    // Objeto donde almacenaremos las categorías
    // const resultInfo = {};

    // Recorrer cada línea y extraer las categorías y sus valores
    // lines.forEach((line) => {
    //   const index = line.indexOf(': ');
    //   if (index !== -1) {
    //     const category = line.slice(0, index).trim();
    //     const value = line.slice(index + 2).trim();
    //     resultInfo[category] = value;
    //   }
    // });

    // console.log(response?.data.choices[0].text);

    // console.log(JSON.parse(response?.data.choices[0].text));

    // Convertir el objeto en formato JSON

    return JSON.parse(response?.data.choices[0].text);
  }
}
