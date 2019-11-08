import compiler from "./loader.js";

test("Resolves fallbacks and contains all messages", async () => {
  const stats = await compiler("i18n/uk.json");
  const output = stats.toJson().modules[0].source;
  expect(output).toBe(
    '{"msg-one":"uk-one","msg-two":"uk-two","msg-three":"ru-three","msg-four":"en-four"}'
  );
});
