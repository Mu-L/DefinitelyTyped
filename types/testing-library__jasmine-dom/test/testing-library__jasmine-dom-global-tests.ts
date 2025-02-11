import JasmineDOM from "@testing-library/jasmine-dom";

jasmine.addMatchers(JasmineDOM);

const element: HTMLElement = document.body;

expect(element).toBeInTheDocument();
expect(element).toBeVisible();
expect(element).toBeEmptyDOMElement();
expect(element).toBeDisabled();
expect(element).toBeEnabled();
expect(element).toBeInvalid();
expect(element).toBeRequired();
expect(element).toBeValid();
expect(element).toContainElement(document.body);
expect(element).toContainElement(null);
expect(element).toHaveAttribute("attr");
expect(element).toHaveAttribute("attr", true);
expect(element).toHaveAttribute("attr", "yes");
expect(element).toHaveClassName();
expect(element).toHaveClassName("cls1");
expect(element).toHaveClassName("cls1", "cls2", "cls3", "cls4");
expect(element).toHaveDisplayValue("str");
expect(element).toHaveDisplayValue(["str1", "str2"]);
expect(element).toHaveDisplayValue(/str/);
expect(element).toHaveDisplayValue([/str1/, "str2"]);
expect(element).toHaveFocus();
expect(element).toHaveFormValues({ foo: "bar", baz: 1 });
expect(element).toHaveStyle("display: block");
expect(element).toHaveStyle({ display: "block", width: 100 });
expect(element).toHaveTextContent("Text");
expect(element).toHaveTextContent(/Text/);
expect(element).toHaveTextContent("Text", { normalizeWhitespace: true });
expect(element).toHaveTextContent(/Text/, { normalizeWhitespace: true });
expect(element).toHaveValue();
expect(element).toHaveValue("str");
expect(element).toHaveValue(["str1", "str2"]);
expect(element).toHaveValue(1);
expect(element).toHaveValue(null);
expect(element).toBeChecked();
expect(element).toHaveDescription("some description");
expect(element).toHaveDescription(/some description/);
expect(element).toHaveDescription(/partial/);
expect(element).toHaveDescription();
expect(element).toContainHTML("some text");
expect(element).toHaveAccessibleDescription("some text");
expect(element).toHaveAccessibleDescription(/some text/);
expect(element).toHaveAccessibleDescription(jasmine.stringContaining("a"));
expect(element).toHaveAccessibleDescription(jasmine.stringMatching(/a/));
expect(element).toHaveAccessibleName("some text");
expect(element).toHaveAccessibleName(/some text/);
expect(element).toHaveAccessibleName(jasmine.stringContaining("a"));
expect(element).toHaveAccessibleName(jasmine.stringMatching(/a/));
expect(element).toHaveErrorMessage("some text");
expect(element).toHaveErrorMessage(/some text/);
expect(element).toHaveErrorMessage(jasmine.stringContaining("a"));
expect(element).toHaveErrorMessage(jasmine.stringMatching(/a/));

expect(element).not.toBeInTheDocument();
expect(element).not.toBeVisible();
expect(element).not.toBeEmptyDOMElement();
expect(element).not.toBeDisabled();
expect(element).not.toBeEnabled();
expect(element).not.toBeInvalid();
expect(element).not.toBeRequired();
expect(element).not.toBeValid();
expect(element).not.toContainElement(document.body);
expect(element).not.toContainElement(null);
expect(element).not.toHaveAttribute("attr");
expect(element).not.toHaveAttribute("attr", true);
expect(element).not.toHaveAttribute("attr", "yes");
expect(element).not.toHaveClassName();
expect(element).not.toHaveClassName("cls1");
expect(element).not.toHaveClassName("cls1", "cls2", "cls3", "cls4");
expect(element).not.toHaveDisplayValue("str");
expect(element).not.toHaveDisplayValue(["str1", "str2"]);
expect(element).not.toHaveDisplayValue(/str/);
expect(element).not.toHaveDisplayValue([/str1/, "str2"]);
expect(element).not.toHaveFocus();
expect(element).not.toHaveFormValues({ foo: "bar", baz: 1 });
expect(element).not.toHaveStyle("display: block");
expect(element).not.toHaveTextContent("Text");
expect(element).not.toHaveTextContent(/Text/);
expect(element).not.toHaveTextContent("Text", { normalizeWhitespace: true });
expect(element).not.toHaveTextContent(/Text/, { normalizeWhitespace: true });
expect(element).not.toHaveValue();
expect(element).not.toHaveValue("str");
expect(element).not.toHaveValue(["str1", "str2"]);
expect(element).not.toHaveValue(1);
expect(element).not.toBeChecked();
expect(element).not.toHaveDescription("some description");
expect(element).not.toHaveDescription();
expect(element).not.toBePartiallyChecked();
expect(element).not.toContainHTML("some text");
expect(element).not.toHaveAccessibleDescription("some text");
expect(element).not.toHaveAccessibleDescription(/some text/);
expect(element).not.toHaveAccessibleDescription(jasmine.stringContaining("a"));
expect(element).not.toHaveAccessibleDescription(jasmine.stringMatching(/a/));
expect(element).not.toHaveAccessibleName("some text");
expect(element).not.toHaveAccessibleName(/some text/);
expect(element).not.toHaveAccessibleName(jasmine.stringContaining("a"));
expect(element).not.toHaveAccessibleName(jasmine.stringMatching(/a/));
expect(element).not.toHaveErrorMessage("some text");
expect(element).not.toHaveErrorMessage(/some text/);
expect(element).not.toHaveErrorMessage(jasmine.stringContaining("a"));
expect(element).not.toHaveErrorMessage(jasmine.stringMatching(/a/));
