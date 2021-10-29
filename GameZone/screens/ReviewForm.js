import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import * as Yup from 'yup';
import Button from '../components/Button';

const ReviewForm = ({ addReview }) => {

    const schema = Yup.object().shape({
        title: Yup.string().required('Title is Empty'),
        rating: Yup.number()
            .typeError('You must specify a number')
            .max(5, "Rating must be between 1 -5")
    });

    return (
        <Formik
            initialValues={{ title: '', body: '', rating: '' }}
            validationSchema={schema}
            onSubmit={(values) => {
                addReview(values);
                console.log(values);
            }}
        >
            {(props) => {
                return (<View>
                    <TextInput
                        style={styles.input}
                        placeholder='Review Title'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        onBlur={props.handleBlur('title')} />

                    {props.errors.title &&
                        <Text
                            style={{ fontSize: 14, color: 'red', marginBottom: 8 }}
                        >
                            {props.errors.title}
                        </Text>
                    }
                    <TextInput
                        multiline
                        style={styles.input}
                        placeholder='Review Body'
                        onChangeText={props.handleChange('body')}
                        value={props.values.body} />

                    <TextInput
                        style={styles.input}
                        placeholder='Rating (1-5)'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        keyboardType='numeric'
                        onBlur={props.handleBlur('rating')}
                    />

                    {props.errors.rating &&
                        <Text
                            style={{ fontSize: 14, color: 'red', marginBottom: 8 }}
                        >
                            {props.errors.rating}
                        </Text>
                    }

                    <Button
                        title='Submit'
                        onClick={() => {
                            props.handleSubmit()
                        }}
                        backgroundStyle={{ marginTop: 8 }}
                    // textStyle={{ color: 'red' }}
                    />
                </View>
                );
            }}

        </Formik>
    );
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 4,
        padding: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 18,
        marginVertical: 8
    }
});

export default ReviewForm;