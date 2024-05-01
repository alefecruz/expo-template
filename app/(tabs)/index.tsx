import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/atoms/Text';
import { Form, createQuestion, validate } from '@/libs/form';

const myForm = (defaultValue?: string) => {
  const questionEmail = createQuestion({
    label: 'E-mail',
    fields: [
      {
        fieldTextInputProps: {
          name: 'email',
          defaultValue,
          validation: validate().required().isEmail(),
        },
      },
    ],
  });

  const questionPassword = createQuestion({
    label: 'Senha',
    fields: [
      {
        fieldTextInputProps: {
          name: 'password',
          secureTextEntry: true,
          defaultValue: '',
          validation: validate().required(),
        },
      },
    ],
  });

  return [questionEmail, questionPassword];
};

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text format="H3">Form exemple</Text>
      <Form
        form={myForm('alefecrz@gmail.com')}
        SubmitButtonProps={{
          label: 'Enviar',
          onPress: (data) => console.log(data),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
