import type { Insight } from './types'

export const doesAugmentationHelp: Insight = {
  slug: 'does-image-augmentation-always-help',
  readingTime: '3 min',
  tags: ['Machine Learning', 'Methodology'],
  content: {
    en: {
      title: 'Does Image Augmentation Always Help? A Negative Result.',
      dek: 'A 5-seed study on a sparse image catalog found that the standard advice made accuracy worse.',
      body: [
        'The standard advice for training an image classifier on a small dataset is: add data augmentation. Flip, rotate, zoom — more effective examples, better generalization. We tested that advice directly, training a classifier on a deliberately sparse catalog (40 images per class, Fashion-MNIST) across 5 random seeds to separate a real effect from noise.',
        'The naive version of that advice made things worse. Accuracy on the held-out set dropped from 75.2% to 69.8% when standard augmentation was applied without adjustment. A calibrated configuration — narrower rotation and zoom ranges, tuned to the dataset\'s actual variability rather than a default preset — recovered most of the loss, reaching 73.5%, still short of the un-augmented baseline.',
        'The lesson isn\'t "don\'t augment." It\'s that augmentation is a hyperparameter like any other, and applying it by convention rather than by measurement can cost you accuracy rather than buy it — a small, structured negative result, rerun across enough seeds to trust it, worth more than a single lucky run that confirms what a tutorial already told you.',
      ],
    },
    es: {
      title: '¿El Aumento de Datos Siempre Ayuda? Un Resultado Negativo.',
      dek: 'Un estudio con 5 semillas sobre un catálogo de imágenes escaso encontró que el consejo estándar empeoró la exactitud.',
      body: [
        'El consejo estándar para entrenar un clasificador de imágenes con un dataset pequeño es: agregar aumento de datos (data augmentation). Voltear, rotar, hacer zoom — más ejemplos efectivos, mejor generalización. Pusimos ese consejo a prueba directamente, entrenando un clasificador sobre un catálogo deliberadamente escaso (40 imágenes por clase, Fashion-MNIST) a lo largo de 5 semillas aleatorias, para separar un efecto real del ruido.',
        'La versión ingenua de ese consejo empeoró los resultados. La exactitud sobre el conjunto de prueba cayó de 75.2% a 69.8% al aplicar el aumento de datos estándar sin ajustes. Una configuración calibrada — rangos de rotación y zoom más estrechos, ajustados a la variabilidad real del dataset en lugar de un preset por defecto — recuperó la mayor parte de la pérdida, alcanzando 73.5%, aún por debajo de la línea base sin aumento.',
        'La lección no es "no aumente sus datos." Es que el aumento de datos es un hiperparámetro más, y aplicarlo por convención en lugar de por medición puede costarle exactitud en lugar de generarla — un resultado negativo pequeño y estructurado, repetido con suficientes semillas para confiar en él, vale más que una corrida afortunada que confirma lo que ya decía un tutorial.',
      ],
    },
  },
}
