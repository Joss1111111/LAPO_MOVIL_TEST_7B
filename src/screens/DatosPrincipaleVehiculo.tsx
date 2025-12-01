import React from 'react';
import { StyleSheet, View } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { Vehiculo } from '../models/vehiculo';

type DatosPrincipaleVehiculoProps = {
  vehiculo: Vehiculo;
  onChange: (field: keyof Vehiculo, value: string) => void;
  onNext: () => void;
};

export const DatosPrincipaleVehiculo = ({
  vehiculo,
  onChange,
  onNext,
}: DatosPrincipaleVehiculoProps) => {
  const isValid =
    vehiculo.marca.trim() !== '' &&
    vehiculo.modelo.trim() !== '';

  return (
    <View style={styles.container}>
      <FormInput
        label="Marca"
        placeholder="Toyota"
        value={vehiculo.marca}
        onChangeText={value => onChange('marca', value)}
      />

      <FormInput
        label="Modelo"
        placeholder="Corolla"
        value={vehiculo.modelo}
        onChangeText={value => onChange('modelo', value)}
      />

      <FormButton
        label="Continuar"
        onPress={onNext}
        disabled={!isValid}
        style={!isValid && styles.disabledButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  disabledButton: {
    backgroundColor: '#9ca3af',
  },
});

export default DatosPrincipaleVehiculo;
