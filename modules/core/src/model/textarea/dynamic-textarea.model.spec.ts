import {
    DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA,
    DYNAMIC_FORM_TEXTAREA_WRAP_SOFT,
    DynamicTextAreaModel
} from "./dynamic-textarea.model";

describe("DynamicTextAreaModel test suite", () => {

    let model: DynamicTextAreaModel,
        config = {
            id: "textarea",
            validators: {required: null, minLength: 5}
        };

    beforeEach(() => model = new DynamicTextAreaModel(config));

    it("should initialize correctly", () => {

        expect(model.cols).toBe(20);
        expect(model.disabled).toBe(false);
        expect(model.errorMessages).toBeNull();
        expect(model.hasErrorMessages).toBe(false);
        expect(model.id).toEqual(config.id);
        expect(model.label).toBeNull();
        expect(model.name).toEqual(model.id);
        expect(model.rows).toBe(2);
        expect(model.type).toEqual(DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA);
        expect(model.value).toBeNull();
        expect(model.wrap).toEqual(DYNAMIC_FORM_TEXTAREA_WRAP_SOFT);
    });

    it("should throw when no model id is specified", () => {

        expect(() => new DynamicTextAreaModel({}))
            .toThrow(new Error("string id must be specified for DynamicFormControlModel"));
    });

    it("should set disabled property correctly", () => {

        model.disabledUpdates.next(true);

        expect(model.disabled).toBe(true);
    });

    it("should serialize correctly", () => {

        let json = JSON.parse(JSON.stringify(model));

        expect(json.id).toEqual(model.id);
        expect(json.cols).toBe(model.cols);
        expect(Object.keys(json.validators).length).toBe(Object.keys(model.validators).length);
        expect(json.value).toBe(model.value);
        expect(json.type).toEqual(DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA);
    });
});