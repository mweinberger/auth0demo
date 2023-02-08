import React from 'react';
import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import Highlight from '../components/Highlight';
import dynamic from "next/dynamic";


const AuditLogViewer = dynamic(
	  () =>
	    import("@pangeacyber/react-mui-audit-log-viewer").then(
		          (mod) => mod.AuditLogViewer
		        ),
	  {
		      ssr: false,
		    }
);

const handleSearch = (request) => {
	  return fetch("/auth0/api/search", {
		      method: "POST",
		      headers: {
			            Accept: "application/json",
			            "Content-Type": "application/json",
			          },
		      body: JSON.stringify(request),
		    }).then(async (res) => {
			        const data = await res.json();
			        console.log(data);
			        return data;
			      });
};

const handlePageChange = (request) => {
	  return fetch("/auth0/api/results", {
		      method: "POST",
		      headers: {
			            Accept: "application/json",
			            "Content-Type": "application/json",
			          },
		      body: JSON.stringify(request),
		    }).then(async (res) => {
			        const data = await res.json();
			        return data;
			      });
};
function Profile() {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <>
          <Row className="align-items-center profile-header mb-5 text-center text-md-left" data-testid="profile">
            <Col md={2}>
              <img
                src={user.picture}
                alt="Profile"
                className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                decode="async"
                data-testid="profile-picture"
              />
            </Col>
            <Col md>
              <h2 data-testid="profile-name">{user.name}</h2>
              <p className="lead text-muted" data-testid="profile-email">
                {user.email}
              </p>
            </Col>
          </Row>
          <Row data-testid="profile-json">
            <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
          </Row>
	      <AuditLogViewer onSearch={handleSearch} onPageChange={handlePageChange} filters={{ range: { type: "relative", since: "5minute" }  }}  />
        </>
      )}
    </>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
