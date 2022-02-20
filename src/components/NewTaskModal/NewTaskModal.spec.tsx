import { render } from "@testing-library/react";
import NewTaskModal from ".";

jest.mock('react-redux', () => {
  return {
    useDispatch() {
      return () => {}
    }
  }
})

describe('NewTaskModal Component', () => {
  it("render correctly", () => {
    render(<NewTaskModal isOpen={true} onRequestClose={() => {}}  />);
  });
});