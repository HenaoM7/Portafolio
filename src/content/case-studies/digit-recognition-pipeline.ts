import type { CaseStudy } from './types'

export const digitRecognitionPipeline: CaseStudy = {
  slug: 'digit-recognition-pipeline',
  classification: 'personal',
  category: 'computer-vision',
  technologies: ['TensorFlow', 'Keras', 'NumPy'],
  repository: 'https://github.com/HenaoM7/Red_Neuronal',
  images: [
    { src: '/case-studies/digit-recognition-pipeline/confusion_matrix.png', alt: { en: 'Confusion matrix — MLP baseline', es: 'Matriz de confusión — MLP de referencia' } },
    { src: '/case-studies/digit-recognition-pipeline/confusion_matrix_cnn.png', alt: { en: 'Confusion matrix — CNN', es: 'Matriz de confusión — CNN' } },
    { src: '/case-studies/digit-recognition-pipeline/training_curves.png', alt: { en: 'Training curves — MLP baseline', es: 'Curvas de entrenamiento — MLP de referencia' } },
    { src: '/case-studies/digit-recognition-pipeline/training_curves_cnn.png', alt: { en: 'Training curves — CNN', es: 'Curvas de entrenamiento — CNN' } },
    { src: '/case-studies/digit-recognition-pipeline/sample_digits.png', alt: { en: 'Sample digit grid — MLP', es: 'Cuadrícula de dígitos de muestra — MLP' } },
    { src: '/case-studies/digit-recognition-pipeline/sample_digits_cnn.png', alt: { en: 'Sample digit grid — CNN', es: 'Cuadrícula de dígitos de muestra — CNN' } },
    { src: '/case-studies/digit-recognition-pipeline/segmented_document.png', alt: { en: 'Segmented output on a synthetic composite document', es: 'Salida de segmentación sobre un documento compuesto sintético' } },
  ],
  headlineStats: [
    { value: '99.08%', label: { en: 'CNN accuracy, clean digits', es: 'Exactitud CNN, dígitos limpios' } },
    { value: '90.3%', label: { en: 'Accuracy on real extracted digits', es: 'Exactitud sobre dígitos realmente extraídos' } },
  ],
  relatedServiceAnchor: 'capabilities',
  content: {
    en: {
      title: 'Digit Recognition Pipeline — From Segmentation to Confidence Routing',
      subtitle: 'The 9-point gap between a benchmark score and a real extraction pipeline.',
      executiveSummary:
        'A four-stage pipeline — segmentation, classification, confidence routing, and drift monitoring — built to test what production-realistic digit recognition requires beyond a single trained model. The CNN reached 99.08% on clean digits but only 90.3% on digits actually extracted from synthetic composite documents.',
      context:
        'A personal machine learning pipeline project, built to explore what a production-realistic recognition system requires beyond a single trained model. Personal Project — a technical capability demonstration.',
      problem:
        'A model that scores well on clean, pre-cropped digits (like MNIST) rarely reflects how digits actually appear in a real document — embedded, at odd angles, needing to be found before they can be read.',
      data:
        'Synthetic composite documents built to require a full pipeline: segmentation of individual digits from a page-level image, before any classification happens.',
      methodology:
        'A four-stage pipeline — segmentation, classification (an MLP baseline and a CNN compared head-to-head), confidence-based routing for low-certainty predictions, and a drift-monitoring layer to flag when live input starts to diverge from training conditions.',
      evidence:
        '98.10% accuracy for the MLP baseline and 99.08% for the CNN on clean, segmented digits — but only 90.3% on digits actually extracted from the synthetic composite documents, the more realistic test.',
      findings:
        "The roughly 9-point accuracy gap between clean-digit and real-extraction performance is the actual finding — it's the difference a benchmark score hides and a production deployment can't afford to ignore.",
      relevance:
        'Any recognition or classification system built for a client gets evaluated the same way: on realistic input, not on the version of the data that makes the model look best.',
      recommendations: {
        immediate: 'None — closed technical exercise.',
        mediumTerm: 'Not applicable.',
        longTerm: 'The segmentation-then-classify-then-route pattern is the template applied to future document-processing or OCR-adjacent client work.',
      },
      technicalEvidence:
        'TensorFlow/Keras, NumPy. Seven real charts: two confusion matrices (MLP and CNN), two training-curve sets, sample-digit grids, and a segmented-document output sample.',
    },
    es: {
      title: 'Pipeline de Reconocimiento de Dígitos — De la Segmentación al Enrutamiento por Confianza',
      subtitle: 'La brecha de 9 puntos entre un puntaje de benchmark y un pipeline de extracción real.',
      executiveSummary:
        'Un pipeline de cuatro etapas — segmentación, clasificación, enrutamiento por confianza y monitoreo de deriva — construido para probar lo que realmente requiere un reconocimiento de dígitos con realismo de producción, más allá de un solo modelo entrenado. La CNN alcanzó 99.08% sobre dígitos limpios pero solo 90.3% sobre dígitos realmente extraídos de documentos compuestos sintéticos.',
      context:
        'Un proyecto personal de pipeline de machine learning, construido para explorar lo que realmente requiere un sistema de reconocimiento con realismo de producción, más allá de un solo modelo entrenado. Proyecto Personal — una demostración de capacidad técnica.',
      problem:
        'Un modelo que obtiene buenos resultados sobre dígitos limpios y pre-recortados (como MNIST) rara vez refleja cómo aparecen los dígitos en un documento real — incrustados, en ángulos irregulares, que primero hay que encontrar antes de poder leerlos.',
      data:
        'Documentos compuestos sintéticos construidos para requerir un pipeline completo: segmentación de dígitos individuales a partir de una imagen a nivel de página, antes de que ocurra cualquier clasificación.',
      methodology:
        'Un pipeline de cuatro etapas — segmentación, clasificación (un MLP de referencia y una CNN comparados directamente), enrutamiento basado en confianza para predicciones de baja certeza, y una capa de monitoreo de deriva (drift) para señalar cuándo la entrada en producción empieza a divergir de las condiciones de entrenamiento.',
      evidence:
        '98.10% de exactitud para el MLP de referencia y 99.08% para la CNN sobre dígitos limpios y segmentados — pero solo 90.3% sobre dígitos realmente extraídos de los documentos compuestos sintéticos, la prueba más realista.',
      findings:
        'La brecha de aproximadamente 9 puntos de exactitud entre el desempeño sobre dígitos limpios y sobre extracción real es el verdadero hallazgo — es la diferencia que un puntaje de benchmark oculta y que un despliegue en producción no se puede permitir ignorar.',
      relevance:
        'Cualquier sistema de reconocimiento o clasificación construido para un cliente se evalúa de la misma manera: sobre entrada realista, no sobre la versión de los datos que hace ver mejor al modelo.',
      recommendations: {
        immediate: 'Ninguna — ejercicio técnico cerrado.',
        mediumTerm: 'No aplica.',
        longTerm: 'El patrón de segmentar, luego clasificar, luego enrutar es la plantilla aplicada a futuros proyectos de procesamiento de documentos u OCR con clientes.',
      },
      technicalEvidence:
        'TensorFlow/Keras, NumPy. Siete gráficos reales: dos matrices de confusión (MLP y CNN), dos conjuntos de curvas de entrenamiento, cuadrículas de dígitos de muestra, y una muestra de salida de documento segmentado.',
    },
  },
}
