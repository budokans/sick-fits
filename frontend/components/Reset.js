import { useMutation } from '@apollo/client';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      password: $password
      token: $token
    ) {
      code
      message
    }
  }
`;

export default function Reset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token: '',
  });

  const [redeemUserPasswordResetToken, { data, loading }] = useMutation(
    RESET_MUTATION,
    {
      variables: inputs,
    }
  );

  const tokenError = data?.redeemUserPasswordResetToken?.code
    ? data.redeemUserPasswordResetToken
    : undefined;

  async function handleSubmit(e) {
    e.preventDefault();
    await redeemUserPasswordResetToken().catch(console.error);
    resetForm();
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Reset your password below.</h2>

      <DisplayError error={tokenError} />

      {data?.redeemUserPasswordResetToken === null && (
        <p>Success! Now just log in with your new password.</p>
      )}

      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="email">
          Email
          <input
            required
            aria-label="Email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            required
            aria-label="Password"
            type="password"
            name="password"
            minLength="8"
            autoComplete="password"
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Reset</button>
      </fieldset>
    </Form>
  );
}

Reset.propTypes = {
  token: PropTypes.string.isRequired,
};
