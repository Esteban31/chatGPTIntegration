import { Controller, Post } from '@nestjs/common';
import { DiagnosticReturn } from './dto/diagnostic-return';

import { Configuration, OpenAIApi } from 'openai';

@Controller('diagnostics')
export class DiagnosticsController {
  @Post()
  async getDiagnostics(): Promise<any> {
    const request =
      'Según el enunciado anterior, proporciona información en tercera persona somo si fueras un doctor y que la información esté de forma separada sobre la enfermedad actual, el motivo de la consulta, examen físico, impresión y plan de mejora ';

    const configuration = new Configuration({
      organization: '',
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt:
        'Tengo dolor de cabeza y como un pinchazo en el estómago, he estado tomando acetaminofén para el dolor, pero no se me baja ' +
        request,
      max_tokens: 200,
      temperature: 0.9,
    });

    console.log(response?.data.choices[0].text);

    return {
      currentIssue: '',
      originDate: '',
      phisicTest: '',
      impresion: '',
      actionPlan: '',
    };
  }
}
