import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Vehiculo } from '../models/vehiculo';
import FormButton from '../components/FormButton';

type ResumenVehiculoProps = {
  vehiculo: Vehiculo;
  onBack: () => void;
  onRegistrar: () => void;
};

const ResumenVehiculo = ({ vehiculo, onBack, onRegistrar }: ResumenVehiculoProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen del registro</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Marca</Text>
        <Text style={styles.value}>{vehiculo.marca}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Modelo</Text>
        <Text style={styles.value}>{vehiculo.modelo}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Placa</Text>
        <Text style={styles.value}>{vehiculo.placa}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Dueño</Text>
        <Text style={styles.value}>{vehiculo.nombreDuenio}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Año</Text>
        <Text style={styles.value}>{vehiculo.anio}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Tipo de gasolina</Text>
        <Text style={styles.value}>{vehiculo.tipoGasolina}</Text>
      </View>

      <FormButton
        label="Regresar"
        onPress={onBack}
        style={styles.backButton}
      />

      <FormButton
        label="Registrar vehículo"
        onPress={onRegistrar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#111827',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#4b5563',
  },
  value: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
  },
  backButton: {
    marginTop: 24,
    backgroundColor: '#6b7280',
  },
});

export default ResumenVehiculo;
