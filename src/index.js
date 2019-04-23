const { Command, flags } = require("@oclif/command");
const { getDomainsByRegistrant } = require("domain-scout");

// Oclif CLi setup/registration
class DomainsByRegistrantCommand extends Command {
  async run() {
    const { flags } = this.parse(DomainsByRegistrantCommand);
    const { registrant, pretty, count, fullOutput } = flags;

    // Get js objects back from domain-scout
    const domainList = await getDomainsByRegistrant(registrant);

    // If -c provided, just provide total number
    if (count) return this.log(domainList.length);

    // If -f provided, return whole objects to stdout individually.
    if (fullOutput) {
      // If -p provided, prettify by indenting by 2.
      const prettyIndent = pretty ? 2 : 0;
      for (let d of domainList) {
        this.log(JSON.stringify(d, null, prettyIndent));
      }
    } else {
      // If -f output isn't set, just return domains
      for (let d of domainList) {
        this.log(d.domain);
      }
    }
  }
}

DomainsByRegistrantCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({ char: "v" }),
  // add --help flag to show CLI version
  help: flags.help({ char: "h" }),
  registrant: flags.string({
    char: "r",
    description: "Name of the registrant you wish to check",
    required: true
  }),
  pretty: flags.boolean({
    char: "p",
    description: "Pretty print the output when using -f (indent json by 2)",
    default: false
  }),
  count: flags.boolean({
    char: "c",
    description:
      "Just return the total found (Maximum of 500 due to restriction on website)",
    default: false
  }),
  fullOutput: flags.boolean({
    char: "f",
    description: "Returns Domain, creation and registrant",
    default: false
  })
};

module.exports = DomainsByRegistrantCommand;
