# app/controllers/matrix_multiplication_controller.rb
class MatrixMultiplicationController < ApplicationController
    def calculator
      # Render the index.html.erb view for input
    end
  
    def calculate
      # Retrieve input parameters from the request
      matrix1 = params[:matrix1].map { |row| row.map(&:to_i) }
      matrix2 = params[:matrix2].map { |row| row.map(&:to_i) }
  
      # Perform validation on input parameters
      if matrix1.empty? || matrix2.empty?
        render json: { error: "Matrices cannot be empty." }, status: :unprocessable_entity
        return
      end
  
      if matrix1[0].length != matrix2.length
        render json: { error: "Number of columns in Matrix 1 should be equal to the number of rows in Matrix 2 for multiplication." }, status: :unprocessable_entity
        return
      end
  
      # Perform matrix multiplication
      result = multiply_matrices(matrix1, matrix2)
  
      # Return the result
      render json: { result: result }, status: :ok
    end
  
    private
  
    def multiply_matrices(matrix1, matrix2)
      result = Array.new(matrix1.length) { Array.new(matrix2[0].length, 0) }
  
      matrix1.each_with_index do |row1, i|
        matrix2[0].length.times do |j|
          matrix1[0].length.times do |k|
            result[i][j] += matrix1[i][k] * matrix2[k][j]
          end
        end
      end
  
      result
    end
  end
  