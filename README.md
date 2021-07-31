
# @nghinv/react-native-dropdown

A dropdown component with react-native-reanimated

---


[![Version][version-badge]][package]
[![MIT License][license-badge]][license]
[![All Contributors][all-contributors-badge]][all-contributors]


# Installation

## Installing the package

* Use yarn

```sh
yarn add @nghinv/react-native-dropdown
```

* Use npm

```sh
npm install @nghinv/react-native-dropdown
```

- peerDependencies

```sh
yarn add react-native-gesture-handler react-native-reanimated @nghinv/react-native-icons
```

- [@nghinv/react-native-icons](https://github.com/nghinv-software/react-native-icons)


<img src="./assets/example.gif" height="600"/>


# How to use

```javascript
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown } from '@nghinv/react-native-dropdown';

export default function Example() {
  return (
    <View style={styles.container}>
      <Dropdown
        position='auto'
        contentAlign='auto'
        overlayOpacity={0.1}
        options={[
          { title: 'Phuong an 1', iconName: 'photo' },
          { title: 'Phuong an 2', checked: true, iconName: 'photo' },
          {
            title: 'Phuong an 4',
            checked: true,
            renderIcon: () => (
              <View
                style={{ width: 24, height: 32, backgroundColor: 'red' }}
              />
            )
          },
          { title: 'Phuong an 3', checked: true, disable: true },
          { title: 'Phuong an 4', checked: true },
        ]}
      // renderContent={({ direction, dismiss, maxHeight, pointStyle }) => (
      //   <Dropdown.Card
      //     pointStyle={pointStyle}
      //     maxHeight={maxHeight}
      //   >
      //     <ScrollView>
      //       <Dropdown.Button title='Test 1' onPress={dismiss} />
      //       <Dropdown.Separator />
      //       <Dropdown.Button title='Test 1' />
      //       <Dropdown.Separator />
      //       <Dropdown.Button title='Test 1' />
      //       <Dropdown.Separator />
      //       <Dropdown.Button title='Test 1' />
      //       <Dropdown.Separator />
      //       <Dropdown.Button title='Test 1' />
      //       <Dropdown.Separator />
      //       <Dropdown.Button title='Test 1' />
      //       <Dropdown.Separator />
      //       <Dropdown.Button title='Test 1' />
      //       <Dropdown.Separator />
      //       <Dropdown.Button title='Test 1' />
      //       <Dropdown.Separator />
      //       <Dropdown.Button title='Test 1' />
      //       <Dropdown.Separator />
      //     </ScrollView>
      //   </Dropdown.Card>
      // )}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.txtTitle}>Show Dropdown</Text>
        </TouchableOpacity>
      </Dropdown>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 44,
    backgroundColor: 'tomato',
    borderRadius: 8,
    marginVertical: 5,
  },
  txtTitle: {
    fontSize: 18,
    color: 'white',
  },
});
```

---
## Credits

- [@Nghi-NV](https://github.com/Nghi-NV)

[version-badge]: https://img.shields.io/npm/v/@nghinv/react-native-dropdown.svg?style=flat-square
[package]: https://www.npmjs.com/package/@nghinv/react-native-dropdown
[license-badge]: https://img.shields.io/npm/l/@nghinv/react-native-dropdown.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[all-contributors-badge]: https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square
[all-contributors]: #contributors
