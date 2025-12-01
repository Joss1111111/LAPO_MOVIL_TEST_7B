import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Vehiculo } from '../models/vehiculo';
import FormButton from '../components/FormButton';

type VehiculosRegistradosScreenProps = {
  vehiculos: Vehiculo[];
  onRegistrarOtro: () => void;
};

const VehiculosRegistradosScreen = ({
  vehiculos,
  onRegistrarOtro,
}: VehiculosRegistradosScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehículos registrados</Text>

      <View style={styles.tableHeader}>
        <Text style={[styles.cell, styles.headerCell, { flex: 1.2 }]}>Placa</Text>
        <Text style={[styles.cell, styles.headerCell, { flex: 1.8 }]}>Dueño</Text>
        <Text style={[styles.cell, styles.headerCell, { flex: 1.4 }]}>Marca</Text>
        <Text style={[styles.cell, styles.headerCell, { flex: 1.4 }]}>Modelo</Text>
      </View>

      <ScrollView style={styles.tableBody}>
        {vehiculos.map((v, index) => (
          <View
            key={`${v.placa}-${index}`}
            style={[
              styles.tableRow,
              index % 2 === 0 && styles.tableRowAlt,
            ]}
          >
            <Text style={[styles.cell, { flex: 1.2 }]}>{v.placa}</Text>
            <Text style={[styles.cell, { flex: 1.8 }]}>{v.nombreDuenio}</Text>
            <Text style={[styles.cell, { flex: 1.4 }]}>{v.marca}</Text>
            <Text style={[styles.cell, { flex: 1.4 }]}>{v.modelo}</Text>
          </View>
        ))}

        {vehiculos.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Aún no hay vehículos registrados.
            </Text>
          </View>
        )}
      </ScrollView>

      <FormButton
        label="Registrar otro"
        onPress={onRegistrarOtro}
        style={styles.button}
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
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
    paddingVertical: 8,
  },
  tableBody: {
    flex: 1,
    marginTop: 4,
    marginBottom: 16,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 6,
  },
  tableRowAlt: {
    backgroundColor: '#f9fafb',
  },
  cell: {
    fontSize: 13,
    color: '#111827',
    paddingRight: 4,
  },
  headerCell: {
    fontWeight: '600',
    color: '#374151',
  },
  emptyContainer: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#6b7280',
  },
  button: {
    marginTop: 8,
  },
});

export default VehiculosRegistradosScreen;
