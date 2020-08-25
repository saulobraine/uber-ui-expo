import React, { useState } from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

interface SearchProps {
  onLocationSelected: (data: any, detail: any) => void;
}

const Search: React.FC<SearchProps> = ({ onLocationSelected }) => {

  const [searchFocused, setSearchFocused] = useState(false);
  

  return <GooglePlacesAutocomplete
    placeholder="Para onde?"
    placeholderTextColor="#333"
    onPress={onLocationSelected}
    query={{
      // @ts-ignore
      key: process.env.API_GOOGLEMAPS,
      language: 'pt',
      components: 'country:br'
    }}
    textInputProps={{
      onFocus: () => { setSearchFocused(true) },
      onBlur: () => { setSearchFocused(false) },
      autoCapitalize: 'none',
      autoCorrect: false
    }}
    fetchDetails
    listViewDisplayed={searchFocused}
    enablePoweredByContainer={false}
    styles={{
      container: {
        position: 'absolute',
        top: Platform.select({ ios: 60, android: 40 }),
        width: '100%'
      },
      textInputContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        height: 54,
        marginHorizontal: 20,
        marginBottom: 5,
        borderTopWidth: 0,
        borderBottomWidth: 0
      },
      textInput: {
        fontFamily: 'Poppins_300Light',
        height: 54,
        margin: 0,
        borderRadius: 3,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {
          width: 0, height: 0
        },
        shadowRadius: 15,
        borderWidth: 1,
        borderColor: '#ddd'

      },
      listView: {
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#fff",
        marginHorizontal: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {
          width: 0, height: 0
        },
        shadowRadius: 15,
        borderRadius: 3,
      },
      description: {
        fontFamily: 'Poppins_300Light',
        fontSize: 14,
      },
      row: {
        padding: 20,
        height: 58
      }
    }}
  
  />;
}

export default Search;