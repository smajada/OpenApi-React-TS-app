import { useNavigate } from 'react-router-dom';
import { Form, type FormProps, Input } from 'antd';
import { ButtonAtm } from '../atoms/Button/ButtonAtm';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        localStorage.setItem('user', JSON.stringify(values));
        navigate('/');
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
        >
            <Form.Item<FieldType>
                label='Username'
                name='username'
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label='Password'
                name='password'
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <ButtonAtm variant='orange'>Submit</ButtonAtm>
            </Form.Item>
        </Form>
    );
};

export default LoginPage;
