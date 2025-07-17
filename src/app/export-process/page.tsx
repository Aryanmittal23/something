import { Package, ClipboardList, CheckCircle, Truck, Globe } from "lucide-react";

export default function ExportProcess() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Inquiry & Quotation",
      description: "We receive your inquiry and provide a detailed quotation tailored to your requirements.",
    },
    {
      icon: Package,
      title: "Order Confirmation",
      description: "Once you confirm the order, we initiate the procurement and quality check process.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "All products undergo rigorous quality checks to ensure they meet international standards.",
    },
    {
      icon: Truck,
      title: "Logistics & Shipping",
      description: "We handle packaging, documentation, and arrange safe, timely shipment to your destination port.",
    },
    {
      icon: Globe,
      title: "Delivery & Support",
      description: "We provide tracking, delivery updates, and post-shipment support for a seamless experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col items-center py-16 px-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-2 text-center">Export Process</h1>
        <p className="text-amber-700 mb-10 text-center">
          Our streamlined export process ensures quality, transparency, and timely delivery at every step.
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