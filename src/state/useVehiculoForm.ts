import { useState } from 'react';
import { Vehiculo, emptyVehiculo } from '../models/vehiculo';

export type VehiculoStep = 0 | 1 | 2 | 3;

export const TOTAL_STEPS = 3;

export const useVehiculoForm = () => {
    const [vehiculo, setVehiculo] = useState<Vehiculo>(emptyVehiculo);
    const [step, setStep] = useState<VehiculoStep>(0);
    const [vehiculosRegistrados, setVehiculosRegistrados] = useState<Vehiculo[]>([]);

    const updateField = (field: keyof Vehiculo, value: string) => {
        setVehiculo(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const goToStep = (target: VehiculoStep) => {
        setStep(target);
    };

    const nextStep = () =>
        setStep(prev => (prev < 3 ? ((prev + 1) as VehiculoStep) : prev));

    const prevStep = () =>
        setStep(prev => (prev > 0 ? ((prev - 1) as VehiculoStep) : prev));


    const isStep1Valid = vehiculo.marca.trim() !== '' && vehiculo.modelo.trim() !== '';

    const isStep2Valid =
        vehiculo.placa.trim() !== '' &&
        vehiculo.nombreDuenio.trim() !== '' &&
        vehiculo.anio.trim() !== '' &&
        vehiculo.tipoGasolina.trim() !== '';

    const registrarVehiculo = () => {
        setVehiculosRegistrados(prev => [...prev, vehiculo]);
    };

    return {
        vehiculo,
        step,
        vehiculosRegistrados,
        updateField,
        goToStep,
        nextStep,
        prevStep,
        isStep1Valid,
        isStep2Valid,
        registrarVehiculo,
    };
};
