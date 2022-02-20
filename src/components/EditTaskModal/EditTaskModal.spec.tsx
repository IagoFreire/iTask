import { render } from "@testing-library/react";
import EditTaskModal from ".";

jest.mock('react-redux', () => {
  return {
    useDispatch() {
      return () => {}
    }
  }
})

describe('EditTaskModal Component', () => {
  it("render correctly", () => {
    render(<EditTaskModal isOpen={true} onRequestClose={() => {}}  />);
  });
});