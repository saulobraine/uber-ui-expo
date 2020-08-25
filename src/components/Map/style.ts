import { StyleSheet, Dimensions, Platform } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mapStyle: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  locationBox: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    elevation: 0.1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 3,
    flexDirection: "row",
    marginTop: 17.5,
    maxWidth: 100,
    alignItems: "center",
    justifyContent: "center"
  },

  locationText: {
    color: "#333",
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 10,
    lineHeight: 14,
    marginVertical: 4,
    marginHorizontal: 8,
    maxWidth: 65
  },

  locationTimeBox: {
    backgroundColor: "#222",
    paddingVertical: 3,
    paddingHorizontal: 8
  },

  locationTimeText: {
    fontFamily: 'Poppins_300Light',
    fontSize: 8,
    color: 'white',
    textAlign: 'center',
    height: 9,
    flex: 1,
  },

  locationTimeTextSmall: {
    fontFamily: 'Poppins_300Light',
    fontSize: 8,
    color: 'white',
    textAlign: 'center',
    height: 8,
  },

  backButton: {
    position: 'absolute',
    top: Platform.select({ios: 60, android: 40}),
    left: 20
  }

});

export default styles;