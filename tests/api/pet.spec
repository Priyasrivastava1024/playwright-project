import { test, expect } from "../../fixture";
import { TestData } from "../../utils/testData";

test.describe("Pet Store CRUD API Tests", () => {

  test("Create Pet", async ({ petApi }) => {
    const pet = TestData.generatePet();
    const response = await petApi.createPet(pet);
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.id).toBe(pet.id);
    expect(body.name).toBe(pet.name);
  });

  test("Read Pet", async ({ petApi }) => {
    const pet = TestData.generatePet();
    await petApi.createPet(pet);
    const response = await petApi.getPet(pet.id);
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.id).toBe(pet.id);
    expect(body.name).toBe(pet.name);
  });

  test("Update Pet", async ({ petApi }) => {
    const pet = TestData.generatePet();
    await petApi.createPet(pet);
    pet.name = "UpdatedPet";
    const updateResponse = await petApi.updatePet(pet);
    expect(updateResponse.ok()).toBeTruthy();
    const updatedBody = await updateResponse.json();
    expect(updatedBody.name).toBe("UpdatedPet");
  });

  test("Delete Pet", async ({ petApi }) => {
    const pet = TestData.generatePet();
    await petApi.createPet(pet);
    const deleteResp = await petApi.deletePet(pet.id);
    expect(deleteResp.ok()).toBeTruthy();
    const getResp = await petApi.getPet(pet.id);
    expect(getResp.status()).toBe(404);
  });

});
