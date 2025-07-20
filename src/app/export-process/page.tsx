import { Package, ClipboardList, CheckCircle, Truck, Globe } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function ExportProcess() {
  const { t } = useTranslation();
  const steps = [
    {
      icon: ClipboardList,
      title: t('exportProcess.steps.inquiry.title'),
      description: t('exportProcess.steps.inquiry.description'),
    },
    {
      icon: Package,
      title: t('exportProcess.steps.orderConfirmation.title'),
      description: t('exportProcess.steps.orderConfirmation.description'),
    },
    {
      icon: CheckCircle,
      title: t('exportProcess.steps.qualityAssurance.title'),
      description: t('exportProcess.steps.qualityAssurance.description'),
    },
    {
      icon: Truck,
      title: t('exportProcess.steps.logistics.title'),
      description: t('exportProcess.steps.logistics.description'),
    },
    {
      icon: Globe,
      title: t('exportProcess.steps.delivery.title'),
      description: t('exportProcess.steps.delivery.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col items-center py-16 px-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-2 text-center">{t('exportProcess.hero.title')}</h1>
        <p className="text-amber-700 mb-10 text-center">
          {t('exportProcess.hero.subtitle')}
        </p>
        <ol className="space-y-8">
          {steps.map((step, idx) => (
            <li key={step.title} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <step.icon className="w-12 h-12 text-amber-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-amber-900 mb-1">{idx + 1}. {step.title}</h2>
                <p className="text-amber-700 text-base">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
} 