/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { Configuration, OpenAIApi } from "openai";



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any> {


    // const configuration = new Configuration({
    //   organization: "",
    //   apiKey: "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",
    // });


    // const prompt = "Médico: Buenas tardes, Juan. ¿En qué puedo ayudarte hoy?Juan Pérez: Buenas tardes, doctor. Verá, he estado sintiéndome un poco mal últimamente. Tengo dolores en el pecho y me cuesta respirar, sobre todo cuando hago algún esfuerzo. Me preocupa bastante porque nunca había sentido algo así.Médico: Entiendo, Juan. Es importante que me cuentes más sobre estos síntomas. ¿Desde cuándo has estado experimentando estos dolores en el pecho y la dificultad para respirar? ¿Hay algo en particular que desencadene estos síntomas?Juan Pérez: Hace unos días comencé a sentir una molestia en el pecho, pero pensé que tal vez era solo el estrés del trabajo. Sin embargo, los dolores persistieron y ahora también me siento un poco cansado. No noto que algo en específico desencadene los síntomas, simplemente me ocurren en diferentes momentos del día.Médico: Comprendo. ¿Tienes algún antecedente médico relevante que pueda estar relacionado con estos síntomas? Por ejemplo, alguna condición cardíaca o respiratoria previa, diabetes, hipertensión, entre otros.    Juan Pérez: Sí, doctor. Hace algunos años me diagnosticaron hipertensión arterial y diabetes tipo 2. Desde entonces he estado tomando medicamentos para controlarlos. También tengo sobrepeso, siempre he lidiado con eso.Médico: Gracias por compartir esa información, Juan. Es valiosa para entender mejor tu situación. Los antecedentes médicos son importantes para establecer un diagnóstico preciso. Ahora, respecto a los dolores en el pecho y la dificultad para respirar, realizaré un examen físico para evaluar tu condición. Después de eso, ordenaré algunas pruebas adicionales para tener una visión más completa de tu salud.Juan Pérez: Está bien, doctor. Agradezco que me ayude a entender lo que está sucediendo. Estoy un poco preocupado, pero confío en que juntos encontraremos una solución.    Médico: Tranquilo, Juan. Estoy aquí para ayudarte en todo lo que pueda. Vamos a trabajar juntos para abordar estos síntomas y mejorar tu bienestar. Realizaremos las pruebas necesarias y te proporcionaré un plan de tratamiento adecuado."
    
    // const openai = new OpenAIApi(configuration);
    // const response = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: prompt,
    //   max_tokens: 7,
    //   temperature: 0,
    //   top_p: 1,
    //   n: 1,
    //   stream: false,
    //   logprobs: null,
    //   stop: ""
    // });

    

    return {}
  }
}
