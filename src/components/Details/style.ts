import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
    height: 300,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    padding: 20,
  },

  typeTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: '#222'
  },

  typeDescription: {
    fontFamily: 'Poppins_300Light',
    fontSize: 14,
    color: '#666',
  },

  typeImage: {
    height: 80,
    marginVertical: 10
  },

  requestButton: {
    height: 44,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 3,
    marginTop: 10,
  },

  requestButtonText: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18
  },



});

export default styles;
