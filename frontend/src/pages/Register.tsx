import { SyntheticEvent, useState } from "react";
import styled from "styled-components";
import { useRegister } from "../hooks/useRegister";

const Container = styled.div``;

const Card = styled.form`
  width: 50vw;
  height: 60vh;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  > label {
    font-size: 0.85rem;
    font-weight: 600;
  }

  > input,
  select {
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    border-width: 1px;
  }
`;

const ErrorFieldContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const ErrorField = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
`;

const SubmitButton = styled.button`
  background-color: var(--secondary-text);
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  width: fit-content;
  border: none;
  border-radius: 5rem;

  color: white;
  text-transform: uppercase;

  transition: all var(--anim-time) ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: var(--secondary-text-hover);
  }
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, error, isLoading } = useRegister();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await register(email, password);
  };

  return (
    <Container>
      <Card className="card" onSubmit={handleSubmit}>
        <h3 className="accented" style={{ textAlign: "center" }}>
          Register
        </h3>
        <div>
          <InputsContainer>
            <InputContainer>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="register-form-email"
              />
            </InputContainer>
            <InputContainer>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="register-form-password"
              />
            </InputContainer>
          </InputsContainer>
          <ErrorFieldContainer>
            {error && <ErrorField className="error">{error}</ErrorField>}
          </ErrorFieldContainer>
        </div>
        <div>
          <SubmitButton type="submit" disabled={isLoading}>
            Register
          </SubmitButton>
        </div>
      </Card>
    </Container>
  );
};

export default Register;
