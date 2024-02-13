import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Input from '../input';

const EditModal = ({
  visible,
  closeModal,
  willEdit,
  setWillEdit,
  onConfirm,
  hasError,
  errorMessage,
}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContentWrapper}>
          <Text style={styles.title}>Edit ToDo</Text>
          <Input
            value={willEdit}
            onChangeText={text => setWillEdit(text)}
            placeholder="Will Edit Text"
          />
          {hasError && (
            <Text style={styles.validationText}>{errorMessage}</Text>
          )}
          <View style={styles.buttonsWrapper}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
