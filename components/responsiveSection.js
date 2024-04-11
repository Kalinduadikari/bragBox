import styled from 'styled-components';

const ResponsiveSection = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  .section {
    padding: ${props => props.padding || '8px'};
    border-radius: ${props => props.borderRadius || '8px'};
    margin-top: ${props => props.marginTop || '0.5rem'};
    overflow: hidden;
  }

  .content {
    width: ${props => props.contentWidth || '100%'};
    background: linear-gradient(135deg, #ff8a00, #e52e71);
    border-radius: ${props => props.contentBorderRadius || '10px'};
    padding-right: ${props => props.contentPaddingRight || '300px'};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    .section {
      padding: ${props => props.smallScreenPadding || '4px'};
      .content {
        width: ${props => props.smallScreenWidth || '20px'};
        padding-right: ${props => props.smallScreenPaddingRight || '0'};
      }
    }
  }
`;

const ResponsiveComponent = ({ children, ...rest }) => {
  return (
    <ResponsiveSection {...rest}>
      <div className="section">
        <div className="content">
          {children}
        </div>
      </div>
    </ResponsiveSection>
  );
};

// Usage example:
<ResponsiveComponent
  padding="8px"
  borderRadius="md"
  marginTop="0.5rem"
  contentWidth="100%"
  contentBorderRadius="10px"
  contentPaddingRight="300px"
  smallScreenPadding="4px"
  smallScreenWidth="20px"
  smallScreenPaddingRight="0"
>
  <ContentTemp
    id="ofsos"
    date="APR 10 2024"
    lng=""
    title="As technology evolves, humans themselves devolve."
    descr=""
  />
</ResponsiveComponent>;
