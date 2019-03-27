const { Command, flags } = require("@oclif/command");
const { getDomainsByRegistrar } = require("domain-scout");

class DomainsByRegistrarCommand extends Command {
  async run() {
    const { flags } = this.parse(DomainsByRegistrarCommand);
    const registrant = flags.registrant;
    const domainList = await getDomainsByRegistrar(registrant);
    const prettyIndent = flags.pretty ? 2 : 0;
    this.log(JSON.stringify(domainList, null, prettyIndent));
  }
}

DomainsByRegistrarCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({ char: "v" }),
  // add --help flag to show CLI version
  help: flags.help({ char: "h" }),
  registrant: flags.string({
    char: "r",
    desciprtion: "Name of the registrant you wish to check",
    required: true
  }),
  pretty: flags.boolean({
    char: "p",
    desciprtion: "Pretty print the output",
    default: false
  })
};

module.exports = DomainsByRegistrarCommand;
