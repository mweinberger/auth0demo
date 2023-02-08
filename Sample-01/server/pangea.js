import { AuditService, PangeaConfig } from "pangea-node-sdk";

const DOMAIN = "aws.us.pangea.cloud";
const token = process.env.PANGEA_AUDIT_TOKEN;

const config = new PangeaConfig({
  domain: DOMAIN,
});

const audit = new AuditService(token, config);

export default audit;

