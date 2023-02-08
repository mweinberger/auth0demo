import React from 'react';

import Logo from './Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <h1 className="mb-4" data-testid="hero-title">
      Pangea - Auth0 Integration
    </h1>

    <p className="lead" data-testid="hero-lead" style={{fontSize: 18}}>
      This is a sample application that demonstrates the integration between Auth0 and Pangea.  It uses a variety of Pangea security APIs to validate and record new user registrations:
	<p></p><p>Pangea Domain Intel - This API detects users registering from malicious or risky domain names by retrieving intelligence about known domain names through a combination of providers.  It contains intelligence on over 390 million domain names.
	</p> <p>Pangea Embargo Check - This API resolves the registrant's IP address to its country and cross-references it with a list of embargoed or export restricted countries. This configurable API can be used to comply with ITAR export restrictions in the US, or other export restrictions in other parts of the world.
	</p><p>Pangea Secure Audit Log - Both positive and negative results are logged to the Pangea Secure Audit Log service, which provides immutable, and cryptographically verifiable tamperproof audit logging capabilities.

    </p> </p>
  </div>
);

export default Hero;
